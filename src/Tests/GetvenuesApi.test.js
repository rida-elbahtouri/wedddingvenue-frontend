import { GetVenuesApi } from '../functions/Api';

jest.mock('../functions/Api');

describe('Api Response', () => {
  it('returns a list of venues', async () => {
    const venues = [
      {
        id: 1,
        name: 'SME Hotels',
        description: "When it comes to luxury New York City weddings, The New York Public Library is as classic as you can get—with an ample dose of glamour. With sky high ceilings, marble columns, and a pair of grand welcoming staircases (both inside and out), this iconic spot is a truly one-of-a-kind space that's as stunning on its own as it is versatile and transformable. The best part? The iconic landmark has multiple event spaces within the building, making it easy for guests to migrate from one space to the next. Keep in mind that each room can play host to a different vibe, from your romantic ceremony to an all-out dance party.",
        location: 'Morocco fes',
        price: 1200,
        created_at: '2020-10-16T12:39:42.115Z',
        updated_at: '2020-10-16T12:43:27.088Z',
        photo: 'https://i.ibb.co/mbySLcB/Wedding-Venue.jpg',
      },
      {
        id: 2,
        name: 'Villa Balbiano',
        description: "When it comes to luxury New York City weddings, The New York Public Library is as classic as you can get—with an ample dose of glamour. With sky high ceilings, marble columns, and a pair of grand welcoming staircases (both inside and out), this iconic spot is a truly one-of-a-kind space that's as stunning on its own as it is versatile and transformable. The best part? The iconic landmark has multiple event spaces within the building, making it easy for guests to migrate from one space to the next. Keep in mind that each room can play host to a different vibe, from your romantic ceremony to an all-out dance party.",
        location: 'Morocco fes',
        price: 900,
        created_at: '2020-10-16T12:44:58.300Z',
        updated_at: '2020-10-16T12:46:37.807Z',
        photo: 'https://i.ibb.co/T0XJHt8/wedding-venue-decorations-9.jpg',
      },
      {
        id: 3,
        name: 'The Historic Royal Palaces',
        description: 'Yes, you can get married at the royal palaces. From Banqueting House and Hampton Court Palace to Kensington Palace (where the Cambridges and Sussexes reside), let splendid formal gardens, elegant cobbled courtyards, and magnificent Tudor and Baroque architecture be an elegant yet grand British backdrop for your wedding. ',
        location: 'London, England',
        price: 2300,
        created_at: '2020-10-16T12:49:37.675Z',
        updated_at: '2020-10-16T12:50:10.344Z',
        photo: 'https://i.ibb.co/QQ5ZqqR/unnamed.jpg',
      },
      {
        id: 5,
        name: 'Hayfield ',
        description: "Wild grasses, sweeping expanses, and ancient trees are just a few details that this Catskill State Park venue has to offer when creating a storybook setting for your wedding ceremony and reception. Say your vows in the actual hay field, followed by a dinner outside or in the barn, a rustic and renovated English Frame Barn and Prairie Barn with a grand 35’ ceiling.\n\nIf you're looking for ideas of how to style this barn venue in a way that's anything but basic, take cues from BAZAAR Features Director, Olivia Fleming, and her husband, Matt Rubin, who wed here.",
        location: 'Maplecrest, NY  ',
        price: 950,
        created_at: '2020-10-16T12:53:02.423Z',
        updated_at: '2020-10-16T12:53:31.870Z',
        photo: 'https://i.ibb.co/SnTHXjJ/Botleys-Mansion-Wedding-Venue-in-Surrey.png',
      },
      {
        id: 4,
        name: 'Blackberry Farm',
        description: "What was discovered originally as a wild blackberry bramble (hence the name) in the Great Smoky Mountains, is now a completely luxurious farmstead that has blossomed into a pastoral 4,200-acre estate. From Luke Bryan concerts to Billy Reid fashion shows, you're in good company when it comes to planning a wedding at Blackberry Farm. Let Southern hospitality, a beautiful backdrop, gourmet meals, and great whiskey selection add to the unforgettable experience. ",
        location: 'Walland, TN ',
        price: 950,
        created_at: '2020-10-16T12:51:26.661Z',
        updated_at: '2020-10-16T12:54:24.462Z',
        photo: 'https://i.ibb.co/R3zTKS9/r10-2x-Wedding-Venues-with-Large-Capacity-27-c73f4b0.jpg',
      },
    ];

    GetVenuesApi.mockResolvedValue({ venues });
    const VenuesApi = await GetVenuesApi();
    expect(VenuesApi).toEqual({ venues });
  });
});
