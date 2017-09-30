
import { Cmp6527Component } from './cmp';
describe('Cmp6527Component', () => {
  it('should add', () => {
    expect(new Cmp6527Component().add6527(1)).toBe(6528);
  });
});