
import { Cmp6981Component } from './cmp';
describe('Cmp6981Component', () => {
  it('should add', () => {
    expect(new Cmp6981Component().add6981(1)).toBe(6982);
  });
});