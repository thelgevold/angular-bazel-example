
import { Cmp7850Component } from './cmp';
describe('Cmp7850Component', () => {
  it('should add', () => {
    expect(new Cmp7850Component().add7850(1)).toBe(7851);
  });
});