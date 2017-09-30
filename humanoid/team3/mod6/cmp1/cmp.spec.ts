
import { Cmp7361Component } from './cmp';
describe('Cmp7361Component', () => {
  it('should add', () => {
    expect(new Cmp7361Component().add7361(1)).toBe(7362);
  });
});