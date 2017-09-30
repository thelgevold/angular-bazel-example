
import { Cmp5381Component } from './cmp';
describe('Cmp5381Component', () => {
  it('should add', () => {
    expect(new Cmp5381Component().add5381(1)).toBe(5382);
  });
});