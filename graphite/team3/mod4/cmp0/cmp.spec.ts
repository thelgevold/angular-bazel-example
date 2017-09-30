
import { Cmp6340Component } from './cmp';
describe('Cmp6340Component', () => {
  it('should add', () => {
    expect(new Cmp6340Component().add6340(1)).toBe(6341);
  });
});