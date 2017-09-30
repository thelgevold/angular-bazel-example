
import { Cmp6087Component } from './cmp';
describe('Cmp6087Component', () => {
  it('should add', () => {
    expect(new Cmp6087Component().add6087(1)).toBe(6088);
  });
});