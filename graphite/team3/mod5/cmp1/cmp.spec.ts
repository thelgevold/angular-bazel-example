
import { Cmp6351Component } from './cmp';
describe('Cmp6351Component', () => {
  it('should add', () => {
    expect(new Cmp6351Component().add6351(1)).toBe(6352);
  });
});