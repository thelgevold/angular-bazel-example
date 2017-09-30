
import { Cmp4801Component } from './cmp';
describe('Cmp4801Component', () => {
  it('should add', () => {
    expect(new Cmp4801Component().add4801(1)).toBe(4802);
  });
});