
import { Cmp6139Component } from './cmp';
describe('Cmp6139Component', () => {
  it('should add', () => {
    expect(new Cmp6139Component().add6139(1)).toBe(6140);
  });
});