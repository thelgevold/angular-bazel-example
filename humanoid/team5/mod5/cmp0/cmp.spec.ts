
import { Cmp7550Component } from './cmp';
describe('Cmp7550Component', () => {
  it('should add', () => {
    expect(new Cmp7550Component().add7550(1)).toBe(7551);
  });
});