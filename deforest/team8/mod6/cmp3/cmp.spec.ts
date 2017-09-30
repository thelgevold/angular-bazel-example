
import { Cmp3863Component } from './cmp';
describe('Cmp3863Component', () => {
  it('should add', () => {
    expect(new Cmp3863Component().add3863(1)).toBe(3864);
  });
});