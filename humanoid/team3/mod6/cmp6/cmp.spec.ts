
import { Cmp7366Component } from './cmp';
describe('Cmp7366Component', () => {
  it('should add', () => {
    expect(new Cmp7366Component().add7366(1)).toBe(7367);
  });
});