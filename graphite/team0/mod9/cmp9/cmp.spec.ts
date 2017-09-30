
import { Cmp6099Component } from './cmp';
describe('Cmp6099Component', () => {
  it('should add', () => {
    expect(new Cmp6099Component().add6099(1)).toBe(6100);
  });
});