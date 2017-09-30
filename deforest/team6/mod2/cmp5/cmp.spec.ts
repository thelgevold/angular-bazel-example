
import { Cmp3625Component } from './cmp';
describe('Cmp3625Component', () => {
  it('should add', () => {
    expect(new Cmp3625Component().add3625(1)).toBe(3626);
  });
});