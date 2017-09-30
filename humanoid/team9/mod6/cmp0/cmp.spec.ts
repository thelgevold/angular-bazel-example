
import { Cmp7960Component } from './cmp';
describe('Cmp7960Component', () => {
  it('should add', () => {
    expect(new Cmp7960Component().add7960(1)).toBe(7961);
  });
});