
import { Cmp5298Component } from './cmp';
describe('Cmp5298Component', () => {
  it('should add', () => {
    expect(new Cmp5298Component().add5298(1)).toBe(5299);
  });
});