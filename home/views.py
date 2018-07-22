# home/views.py
# from django.shortcuts import render
# from django.views.generic import TemplateView

# # Create your views here.
# class HomePageView(TemplateView):
#     def get(self, request, **kwargs):
#         return render(request, 'index.html', context=None)


# feederfoxnew/home/views.py
from django.shortcuts import render
from django.views.generic import TemplateView # Import TemplateView
from home.forms import HomeForm

# Add the two views we have been talking about  all this time :)
class HomePageView(TemplateView):
    template_name = "index.html"

class AboutPageView(TemplateView):
    template_name = "publishersignup.html"

    def get(self, request):
        form = HomeForm()

        return render(request, self.template_name, {'form': form})

    def post(self, request):
        sample_chapter = None
        text = None
        form = HomeForm(request.POST, request.FILES)

        if form.is_valid():
            post = form.save(commit=False)
            post.user = request.user
            post.save()

            text = form.cleaned_data['post']
            sample_chapter = form.cleaned_data['post']
            form = HomeForm()
            # return redirect('home:home')

        args = {'form': form, 'text': text, 'sample_chapter': sample_chapter}
        return render(request, 'publishersignup.html', args)