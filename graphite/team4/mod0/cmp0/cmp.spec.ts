
import { Cmp6400Component } from './cmp';
describe('Cmp6400Component', () => {
  it('should add', () => {
    expect(new Cmp6400Component().add6400(1)).toBe(6401);
  });
});