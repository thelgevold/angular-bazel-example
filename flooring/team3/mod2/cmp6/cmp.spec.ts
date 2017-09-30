
import { Cmp5326Component } from './cmp';
describe('Cmp5326Component', () => {
  it('should add', () => {
    expect(new Cmp5326Component().add5326(1)).toBe(5327);
  });
});