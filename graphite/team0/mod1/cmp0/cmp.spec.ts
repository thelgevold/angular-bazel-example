
import { Cmp6010Component } from './cmp';
describe('Cmp6010Component', () => {
  it('should add', () => {
    expect(new Cmp6010Component().add6010(1)).toBe(6011);
  });
});