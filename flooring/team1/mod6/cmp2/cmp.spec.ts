
import { Cmp5162Component } from './cmp';
describe('Cmp5162Component', () => {
  it('should add', () => {
    expect(new Cmp5162Component().add5162(1)).toBe(5163);
  });
});