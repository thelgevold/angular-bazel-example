
import { Cmp7753Component } from './cmp';
describe('Cmp7753Component', () => {
  it('should add', () => {
    expect(new Cmp7753Component().add7753(1)).toBe(7754);
  });
});