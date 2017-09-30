
import { Cmp7964Component } from './cmp';
describe('Cmp7964Component', () => {
  it('should add', () => {
    expect(new Cmp7964Component().add7964(1)).toBe(7965);
  });
});