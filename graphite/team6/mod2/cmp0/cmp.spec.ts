
import { Cmp6620Component } from './cmp';
describe('Cmp6620Component', () => {
  it('should add', () => {
    expect(new Cmp6620Component().add6620(1)).toBe(6621);
  });
});