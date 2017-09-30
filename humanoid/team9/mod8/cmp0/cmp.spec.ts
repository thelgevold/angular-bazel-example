
import { Cmp7980Component } from './cmp';
describe('Cmp7980Component', () => {
  it('should add', () => {
    expect(new Cmp7980Component().add7980(1)).toBe(7981);
  });
});