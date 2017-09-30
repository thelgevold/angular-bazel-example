
import { Cmp6980Component } from './cmp';
describe('Cmp6980Component', () => {
  it('should add', () => {
    expect(new Cmp6980Component().add6980(1)).toBe(6981);
  });
});