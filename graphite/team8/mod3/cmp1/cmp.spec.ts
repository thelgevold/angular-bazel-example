
import { Cmp6831Component } from './cmp';
describe('Cmp6831Component', () => {
  it('should add', () => {
    expect(new Cmp6831Component().add6831(1)).toBe(6832);
  });
});