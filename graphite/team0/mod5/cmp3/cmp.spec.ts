
import { Cmp6053Component } from './cmp';
describe('Cmp6053Component', () => {
  it('should add', () => {
    expect(new Cmp6053Component().add6053(1)).toBe(6054);
  });
});