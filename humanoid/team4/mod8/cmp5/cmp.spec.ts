
import { Cmp7485Component } from './cmp';
describe('Cmp7485Component', () => {
  it('should add', () => {
    expect(new Cmp7485Component().add7485(1)).toBe(7486);
  });
});