
import { Cmp7959Component } from './cmp';
describe('Cmp7959Component', () => {
  it('should add', () => {
    expect(new Cmp7959Component().add7959(1)).toBe(7960);
  });
});