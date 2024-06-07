import { render, fireEvent } from '@testing-library/react';
import DetailDialog from '../src/components/common/dialog/DetailDialog';
import { act } from 'react-dom/test-utils';
import { RecoilRoot } from 'recoil';

describe('DetailDialog', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('updates the icon and localStorage when selectBookmark is clicked', async () => {
    const props = {
      data: {
        id: 'GVQWTHpT1KE',
        slug: 'car-passing-through-road-beside-building-GVQWTHpT1KE',
        alternative_slugs: {
          en: 'car-passing-through-road-beside-building-GVQWTHpT1KE',
          es: 'coche-que-pasa-por-la-carretera-al-lado-del-edificio-GVQWTHpT1KE',
          ja: '建物脇の道路を通る車-GVQWTHpT1KE',
          fr: 'voiture-passant-par-la-route-a-cote-dun-batiment-GVQWTHpT1KE',
          it: 'auto-che-passa-attraverso-la-strada-accanto-alledificio-GVQWTHpT1KE',
          ko: '건물-옆-도로를-통과하는-자동차-GVQWTHpT1KE',
          de: 'auto-fahrt-durch-strasse-neben-gebaude-GVQWTHpT1KE',
          pt: 'carro-passando-pela-estrada-ao-lado-do-predio-GVQWTHpT1KE',
        },
        created_at: '2018-10-25T16:10:28Z',
        updated_at: '2024-05-15T00:28:30Z',
        promoted_at: '2018-10-26T11:52:08Z',
        width: 3161,
        height: 4591,
        color: '#262640',
        blur_hash: 'LIAv^INGt6R*0es9s:oJ-Ut8NGjb',
        description: 'Yongsan',
        alt_description: 'car passing through road beside building',
        breadcrumbs: [],
        urls: {
          raw: 'https://images.unsplash.com/photo-1540483761890-a1f7be05d99f?ixid=M3w2MTk1NTl8MHwxfHNlYXJjaHw1fHxLb3JlYXxlbnwwfHx8fDE3MTc3NTAwMTR8MA&ixlib=rb-4.0.3',
          full: 'https://images.unsplash.com/photo-1540483761890-a1f7be05d99f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MTk1NTl8MHwxfHNlYXJjaHw1fHxLb3JlYXxlbnwwfHx8fDE3MTc3NTAwMTR8MA&ixlib=rb-4.0.3&q=85',
          regular:
            'https://images.unsplash.com/photo-1540483761890-a1f7be05d99f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTk1NTl8MHwxfHNlYXJjaHw1fHxLb3JlYXxlbnwwfHx8fDE3MTc3NTAwMTR8MA&ixlib=rb-4.0.3&q=80&w=1080',
          small:
            'https://images.unsplash.com/photo-1540483761890-a1f7be05d99f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTk1NTl8MHwxfHNlYXJjaHw1fHxLb3JlYXxlbnwwfHx8fDE3MTc3NTAwMTR8MA&ixlib=rb-4.0.3&q=80&w=400',
          thumb:
            'https://images.unsplash.com/photo-1540483761890-a1f7be05d99f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTk1NTl8MHwxfHNlYXJjaHw1fHxLb3JlYXxlbnwwfHx8fDE3MTc3NTAwMTR8MA&ixlib=rb-4.0.3&q=80&w=200',
          small_s3:
            'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1540483761890-a1f7be05d99f',
        },
        links: {
          self: 'https://api.unsplash.com/photos/car-passing-through-road-beside-building-GVQWTHpT1KE',
          html: 'https://unsplash.com/photos/car-passing-through-road-beside-building-GVQWTHpT1KE',
          download:
            'https://unsplash.com/photos/GVQWTHpT1KE/download?ixid=M3w2MTk1NTl8MHwxfHNlYXJjaHw1fHxLb3JlYXxlbnwwfHx8fDE3MTc3NTAwMTR8MA',
          download_location:
            'https://api.unsplash.com/photos/GVQWTHpT1KE/download?ixid=M3w2MTk1NTl8MHwxfHNlYXJjaHw1fHxLb3JlYXxlbnwwfHx8fDE3MTc3NTAwMTR8MA',
        },
        likes: 772,
        liked_by_user: false,
        current_user_collections: [],
        sponsorship: null,
        topic_submissions: {},
        asset_type: 'photo',
        user: {
          id: '5nWio-aFX3c',
          updated_at: '2024-05-17T19:35:19Z',
          username: 'bundo',
          name: 'Bundo Kim',
          first_name: 'Bundo',
          last_name: 'Kim',
          twitter_username: null,
          portfolio_url: 'http://instagram.com/j__kyung/',
          bio: 'Hope you have a nice photo!',
          location: 'Seoul, Korea',
          links: {
            self: 'https://api.unsplash.com/users/bundo',
            html: 'https://unsplash.com/@bundo',
            photos: 'https://api.unsplash.com/users/bundo/photos',
            likes: 'https://api.unsplash.com/users/bundo/likes',
            portfolio: 'https://api.unsplash.com/users/bundo/portfolio',
            following: 'https://api.unsplash.com/users/bundo/following',
            followers: 'https://api.unsplash.com/users/bundo/followers',
          },
          profile_image: {
            small:
              'https://images.unsplash.com/profile-1522243949591-75c7f5ac1ffb?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32',
            medium:
              'https://images.unsplash.com/profile-1522243949591-75c7f5ac1ffb?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64',
            large:
              'https://images.unsplash.com/profile-1522243949591-75c7f5ac1ffb?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128',
          },
          instagram_username: 'j__kyung',
          total_collections: 6,
          total_likes: 26,
          total_photos: 1326,
          total_promoted_photos: 207,
          total_illustrations: 0,
          total_promoted_illustrations: 0,
          accepted_tos: true,
          for_hire: false,
          social: {
            instagram_username: 'j__kyung',
            portfolio_url: 'http://instagram.com/j__kyung/',
            twitter_username: null,
            paypal_email: null,
          },
        },
        tags: [
          {
            type: 'search',
            title: 'korea',
          },
          {
            type: 'landing_page',
            title: 'city',
            source: {
              ancestry: {
                type: {
                  slug: 'wallpapers',
                  pretty_slug: 'HD Wallpapers',
                },
                category: {
                  slug: 'travel',
                  pretty_slug: 'Travel',
                },
                subcategory: {
                  slug: 'city',
                  pretty_slug: 'City',
                },
              },
              title: 'Hd city wallpapers',
              subtitle: 'Download free city wallpapers',
              description:
                'Choose from a curated selection of city wallpapers for your mobile and desktop screens. Always free on Unsplash.',
              meta_title: 'City Wallpapers: Free HD Download [500+ HQ] | Unsplash',
              meta_description:
                'Choose from hundreds of free city wallpapers. Download HD wallpapers for free on Unsplash.',
              cover_photo: {
                id: 'Nyvq2juw4_o',
                slug: 'white-and-brown-city-buildings-during-daytime-Nyvq2juw4_o',
                alternative_slugs: {
                  en: 'white-and-brown-city-buildings-during-daytime-Nyvq2juw4_o',
                  es: 'edificios-blancos-y-marrones-de-la-ciudad-durante-el-dia-Nyvq2juw4_o',
                  ja: '昼間の白と茶色の街の建物-Nyvq2juw4_o',
                  fr: 'batiments-de-la-ville-blancs-et-bruns-pendant-la-journee-Nyvq2juw4_o',
                  it: 'edifici-urbani-bianchi-e-marroni-durante-il-giorno-Nyvq2juw4_o',
                  ko: '낮-동안의-흰색과-갈색-도시-건물-Nyvq2juw4_o',
                  de: 'weisse-und-braune-stadtgebaude-tagsuber-Nyvq2juw4_o',
                  pt: 'edificios-da-cidade-brancos-e-marrons-durante-o-dia-Nyvq2juw4_o',
                },
                created_at: '2016-11-01T00:26:28Z',
                updated_at: '2024-06-03T15:02:30Z',
                promoted_at: '2016-11-01T00:26:28Z',
                width: 3465,
                height: 2131,
                color: '#0c2640',
                blur_hash: 'LhEMa,W=WVWW_4kBjtW=?bkBaefR',
                description: 'City architecture and skyscrapers near waterfront',
                alt_description: 'white and brown city buildings during daytime',
                breadcrumbs: [
                  {
                    slug: 'backgrounds',
                    title: 'HQ Background Images',
                    index: 0,
                    type: 'landing_page',
                  },
                  {
                    slug: 'apps',
                    title: 'App Backgrounds',
                    index: 1,
                    type: 'landing_page',
                  },
                  {
                    slug: 'zoom',
                    title: 'Zoom Backgrounds',
                    index: 2,
                    type: 'landing_page',
                  },
                ],
                urls: {
                  raw: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3',
                  full: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb',
                  regular:
                    'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
                  small:
                    'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max',
                  thumb:
                    'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max',
                  small_s3:
                    'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1477959858617-67f85cf4f1df',
                },
                links: {
                  self: 'https://api.unsplash.com/photos/white-and-brown-city-buildings-during-daytime-Nyvq2juw4_o',
                  html: 'https://unsplash.com/photos/white-and-brown-city-buildings-during-daytime-Nyvq2juw4_o',
                  download: 'https://unsplash.com/photos/Nyvq2juw4_o/download',
                  download_location: 'https://api.unsplash.com/photos/Nyvq2juw4_o/download',
                },
                likes: 3806,
                liked_by_user: false,
                current_user_collections: [],
                sponsorship: null,
                topic_submissions: {},
                asset_type: 'photo',
                premium: false,
                plus: false,
                user: {
                  id: '1--L3vNK0TA',
                  updated_at: '2024-05-20T06:13:11Z',
                  username: 'peterlaster',
                  name: 'Pedro Lastra',
                  first_name: 'Pedro',
                  last_name: 'Lastra',
                  twitter_username: null,
                  portfolio_url: 'https://www.flickr.com/photos/lastingimages/',
                  bio: null,
                  location: null,
                  links: {
                    self: 'https://api.unsplash.com/users/peterlaster',
                    html: 'https://unsplash.com/@peterlaster',
                    photos: 'https://api.unsplash.com/users/peterlaster/photos',
                    likes: 'https://api.unsplash.com/users/peterlaster/likes',
                    portfolio: 'https://api.unsplash.com/users/peterlaster/portfolio',
                    following: 'https://api.unsplash.com/users/peterlaster/following',
                    followers: 'https://api.unsplash.com/users/peterlaster/followers',
                  },
                  profile_image: {
                    small:
                      'https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32',
                    medium:
                      'https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64',
                    large:
                      'https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128',
                  },
                  instagram_username: null,
                  total_collections: 10,
                  total_likes: 46,
                  total_photos: 85,
                  total_promoted_photos: 23,
                  total_illustrations: 0,
                  total_promoted_illustrations: 0,
                  accepted_tos: false,
                  for_hire: false,
                  social: {
                    instagram_username: null,
                    portfolio_url: 'https://www.flickr.com/photos/lastingimages/',
                    twitter_username: null,
                    paypal_email: null,
                  },
                },
              },
            },
          },
          {
            type: 'landing_page',
            title: 'grey',
            source: {
              ancestry: {
                type: {
                  slug: 'wallpapers',
                  pretty_slug: 'HD Wallpapers',
                },
                category: {
                  slug: 'colors',
                  pretty_slug: 'Color',
                },
                subcategory: {
                  slug: 'grey',
                  pretty_slug: 'Grey',
                },
              },
              title: 'Hd grey wallpapers',
              subtitle: 'Download free grey wallpapers',
              description:
                'Choose from a curated selection of grey wallpapers for your mobile and desktop screens. Always free on Unsplash.',
              meta_title: 'Grey Wallpapers: Free HD Download [500+ HQ] | Unsplash',
              meta_description:
                'Choose from hundreds of free grey wallpapers. Download HD wallpapers for free on Unsplash.',
              cover_photo: {
                id: 'ctXf1GVyf9A',
                slug: 'a-close-up-of-a-gray-concrete-surface-ctXf1GVyf9A',
                alternative_slugs: {
                  en: 'a-close-up-of-a-gray-concrete-surface-ctXf1GVyf9A',
                  es: 'un-primer-plano-de-una-superficie-de-hormigon-gris-ctXf1GVyf9A',
                  ja: '灰色のコンクリート表面のクローズアップ-ctXf1GVyf9A',
                  fr: 'gros-plan-dune-surface-de-beton-gris-ctXf1GVyf9A',
                  it: 'un-primo-piano-di-una-superficie-di-cemento-grigio-ctXf1GVyf9A',
                  ko: '회색-콘크리트-표면의-클로즈업-ctXf1GVyf9A',
                  de: 'nahaufnahme-einer-grauen-betonoberflache-ctXf1GVyf9A',
                  pt: 'um-close-up-de-uma-superficie-de-concreto-cinza-ctXf1GVyf9A',
                },
                created_at: '2018-09-10T08:05:55Z',
                updated_at: '2024-06-03T18:10:45Z',
                promoted_at: null,
                width: 5304,
                height: 7952,
                color: '#a6a6a6',
                blur_hash: 'L3IYFNIU00~q-;M{R*t80KtRIUM{',
                description: 'Old stone background texture',
                alt_description: 'a close up of a gray concrete surface',
                breadcrumbs: [
                  {
                    slug: 'images',
                    title: '1,000,000+ Free Images',
                    index: 0,
                    type: 'landing_page',
                  },
                  {
                    slug: 'nature',
                    title: 'Nature Images',
                    index: 1,
                    type: 'landing_page',
                  },
                  {
                    slug: 'stone',
                    title: 'Best Stone Pictures & Images',
                    index: 2,
                    type: 'landing_page',
                  },
                ],
                urls: {
                  raw: 'https://images.unsplash.com/photo-1536566482680-fca31930a0bd?ixlib=rb-4.0.3',
                  full: 'https://images.unsplash.com/photo-1536566482680-fca31930a0bd?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb',
                  regular:
                    'https://images.unsplash.com/photo-1536566482680-fca31930a0bd?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
                  small:
                    'https://images.unsplash.com/photo-1536566482680-fca31930a0bd?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max',
                  thumb:
                    'https://images.unsplash.com/photo-1536566482680-fca31930a0bd?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max',
                  small_s3:
                    'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1536566482680-fca31930a0bd',
                },
                links: {
                  self: 'https://api.unsplash.com/photos/a-close-up-of-a-gray-concrete-surface-ctXf1GVyf9A',
                  html: 'https://unsplash.com/photos/a-close-up-of-a-gray-concrete-surface-ctXf1GVyf9A',
                  download: 'https://unsplash.com/photos/ctXf1GVyf9A/download',
                  download_location: 'https://api.unsplash.com/photos/ctXf1GVyf9A/download',
                },
                likes: 2245,
                liked_by_user: false,
                current_user_collections: [],
                sponsorship: null,
                topic_submissions: {
                  'textures-patterns': {
                    status: 'approved',
                    approved_on: '2020-04-06T14:20:11Z',
                  },
                },
                asset_type: 'photo',
                premium: false,
                plus: false,
                user: {
                  id: 'IFcEhJqem0Q',
                  updated_at: '2024-06-03T12:06:39Z',
                  username: 'anniespratt',
                  name: 'Annie Spratt',
                  first_name: 'Annie',
                  last_name: 'Spratt',
                  twitter_username: 'anniespratt',
                  portfolio_url: 'https://www.anniespratt.com',
                  bio: 'Hobbyist photographer from England, sharing my digital, film + vintage slide scans. Shooting a roll of film every day in 2024. See my collections for film stock examples 🎞️\r\nanniespratt.com ✌️',
                  location: 'New Forest National Park, UK',
                  links: {
                    self: 'https://api.unsplash.com/users/anniespratt',
                    html: 'https://unsplash.com/@anniespratt',
                    photos: 'https://api.unsplash.com/users/anniespratt/photos',
                    likes: 'https://api.unsplash.com/users/anniespratt/likes',
                    portfolio: 'https://api.unsplash.com/users/anniespratt/portfolio',
                    following: 'https://api.unsplash.com/users/anniespratt/following',
                    followers: 'https://api.unsplash.com/users/anniespratt/followers',
                  },
                  profile_image: {
                    small:
                      'https://images.unsplash.com/profile-1648828806223-1852f704c58aimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32',
                    medium:
                      'https://images.unsplash.com/profile-1648828806223-1852f704c58aimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64',
                    large:
                      'https://images.unsplash.com/profile-1648828806223-1852f704c58aimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128',
                  },
                  instagram_username: 'anniespratt',
                  total_collections: 83,
                  total_likes: 14490,
                  total_photos: 22601,
                  total_promoted_photos: 3040,
                  total_illustrations: 3,
                  total_promoted_illustrations: 0,
                  accepted_tos: true,
                  for_hire: false,
                  social: {
                    instagram_username: 'anniespratt',
                    portfolio_url: 'https://www.anniespratt.com',
                    twitter_username: 'anniespratt',
                    paypal_email: null,
                  },
                },
              },
            },
          },
        ],
      },
      handleDialog: () => {},
    }; // 필요한 props를 설정합니다.
    const { getByTestId } = render(
      <RecoilRoot>
        <DetailDialog {...props} />
      </RecoilRoot>,
    );

    const bookmarkButton = getByTestId('bookmark-button');
    const bookmarkIcon = getByTestId('bookmark-icon');

    await act(async () => {
      fireEvent.click(bookmarkButton);
    });

    expect(bookmarkIcon.style.color).toBe('red');

    const bookmarkState = JSON.parse(localStorage.getItem('bookmarkState'))?.[props.data.id];
    expect(bookmarkState).not.toBeNull();
  });
});
