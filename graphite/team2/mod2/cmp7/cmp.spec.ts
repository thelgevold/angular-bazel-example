
import { Cmp6227Component } from './cmp';
describe('Cmp6227Component', () => {
  it('should add', () => {
    expect(new Cmp6227Component().add6227(1)).toBe(6228);
  });
});