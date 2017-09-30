
import { Cmp7103Component } from './cmp';
describe('Cmp7103Component', () => {
  it('should add', () => {
    expect(new Cmp7103Component().add7103(1)).toBe(7104);
  });
});