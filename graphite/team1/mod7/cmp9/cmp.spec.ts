
import { Cmp6179Component } from './cmp';
describe('Cmp6179Component', () => {
  it('should add', () => {
    expect(new Cmp6179Component().add6179(1)).toBe(6180);
  });
});