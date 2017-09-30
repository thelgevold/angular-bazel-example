
import { Cmp7024Component } from './cmp';
describe('Cmp7024Component', () => {
  it('should add', () => {
    expect(new Cmp7024Component().add7024(1)).toBe(7025);
  });
});