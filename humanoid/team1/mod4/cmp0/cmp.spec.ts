
import { Cmp7140Component } from './cmp';
describe('Cmp7140Component', () => {
  it('should add', () => {
    expect(new Cmp7140Component().add7140(1)).toBe(7141);
  });
});