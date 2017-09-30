
import { Cmp7785Component } from './cmp';
describe('Cmp7785Component', () => {
  it('should add', () => {
    expect(new Cmp7785Component().add7785(1)).toBe(7786);
  });
});