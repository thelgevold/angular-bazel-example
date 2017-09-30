
import { Cmp3264Component } from './cmp';
describe('Cmp3264Component', () => {
  it('should add', () => {
    expect(new Cmp3264Component().add3264(1)).toBe(3265);
  });
});