
import { Cmp6371Component } from './cmp';
describe('Cmp6371Component', () => {
  it('should add', () => {
    expect(new Cmp6371Component().add6371(1)).toBe(6372);
  });
});