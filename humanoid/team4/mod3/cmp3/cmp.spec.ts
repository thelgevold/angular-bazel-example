
import { Cmp7433Component } from './cmp';
describe('Cmp7433Component', () => {
  it('should add', () => {
    expect(new Cmp7433Component().add7433(1)).toBe(7434);
  });
});