
import { Cmp6972Component } from './cmp';
describe('Cmp6972Component', () => {
  it('should add', () => {
    expect(new Cmp6972Component().add6972(1)).toBe(6973);
  });
});