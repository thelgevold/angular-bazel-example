
import { Cmp7133Component } from './cmp';
describe('Cmp7133Component', () => {
  it('should add', () => {
    expect(new Cmp7133Component().add7133(1)).toBe(7134);
  });
});