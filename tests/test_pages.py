from pathlib import Path
import unittest


ROOT = Path(__file__).parent.parent

REQUIRED_PAGES = [
    "index.html",
    "about.html",
    "contact.html",
    "login.html",
    "register.html",
]


class TestLoopPages(unittest.TestCase):

    def test_required_pages_exist(self):
        for page in REQUIRED_PAGES:
            self.assertTrue(
                (ROOT / page).is_file(),
                f"Missing page: {page}"
            )

    def test_pages_have_html_structure(self):
        for page in REQUIRED_PAGES:
            content = (ROOT / page).read_text(encoding="utf-8")

            self.assertIn("<!DOCTYPE html>", content)
            self.assertIn("<html", content)
            self.assertIn("<head>", content)
            self.assertIn("<body>", content)
            self.assertIn("</html>", content)

    def test_pages_have_titles(self):
        for page in REQUIRED_PAGES:
            content = (ROOT / page).read_text(encoding="utf-8")

            self.assertIn("<title>", content)
            self.assertIn("</title>", content)

    def test_index_navigation_links_exist(self):
        content = (ROOT / "index.html").read_text(encoding="utf-8")

        for page in ["about.html", "contact.html", "login.html", "register.html"]:
            self.assertIn(
                f'href="{page}"',
                content,
                f"Missing navigation link to {page}"
            )
    def test_navigation_pages_have_home_link(self):
        for page in ["about.html", "contact.html", "login.html", "register.html"]:
            content = (ROOT / page).read_text(encoding="utf-8")

            self.assertIn(
                'href="index.html"',
                content,
                f"{page} is missing a link to the home page"
            )
    def test_pages_have_expected_titles(self):
        expected_titles = {
            "index.html": "Loop - Short Videos",
            "about.html": "Loop - About",
            "contact.html": "Loop - Contact",
            "login.html": "Loop - Login",
            "register.html": "Loop - Register",
        }

        for page, title in expected_titles.items():
            content = (ROOT / page).read_text(encoding="utf-8")

            self.assertIn(
                f"<title>{title}</title>",
                content,
                f"{page} has an unexpected title"
            )            


if __name__ == "__main__":
    unittest.main()