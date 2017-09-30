
import { Cmp6168Component } from './cmp';
describe('Cmp6168Component', () => {
  it('should add', () => {
    expect(new Cmp6168Component().add6168(1)).toBe(6169);
  });
});