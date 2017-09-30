
import { Cmp7120Component } from './cmp';
describe('Cmp7120Component', () => {
  it('should add', () => {
    expect(new Cmp7120Component().add7120(1)).toBe(7121);
  });
});