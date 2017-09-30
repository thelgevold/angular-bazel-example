
import { Cmp6401Component } from './cmp';
describe('Cmp6401Component', () => {
  it('should add', () => {
    expect(new Cmp6401Component().add6401(1)).toBe(6402);
  });
});