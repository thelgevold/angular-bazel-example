
import { Cmp5637Component } from './cmp';
describe('Cmp5637Component', () => {
  it('should add', () => {
    expect(new Cmp5637Component().add5637(1)).toBe(5638);
  });
});