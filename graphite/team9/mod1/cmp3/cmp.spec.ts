
import { Cmp6913Component } from './cmp';
describe('Cmp6913Component', () => {
  it('should add', () => {
    expect(new Cmp6913Component().add6913(1)).toBe(6914);
  });
});