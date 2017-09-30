
import { Cmp6324Component } from './cmp';
describe('Cmp6324Component', () => {
  it('should add', () => {
    expect(new Cmp6324Component().add6324(1)).toBe(6325);
  });
});