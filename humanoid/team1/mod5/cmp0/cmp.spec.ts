
import { Cmp7150Component } from './cmp';
describe('Cmp7150Component', () => {
  it('should add', () => {
    expect(new Cmp7150Component().add7150(1)).toBe(7151);
  });
});