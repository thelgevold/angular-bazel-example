
import { Cmp6209Component } from './cmp';
describe('Cmp6209Component', () => {
  it('should add', () => {
    expect(new Cmp6209Component().add6209(1)).toBe(6210);
  });
});